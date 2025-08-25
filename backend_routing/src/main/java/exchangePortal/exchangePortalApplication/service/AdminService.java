package exchangePortal.exchangePortalApplication.service;

import exchangePortal.exchangePortalApplication.dto.MatchSuggestion;
import exchangePortal.exchangePortalApplication.model.ItemCategory;
import exchangePortal.exchangePortalApplication.model.Request;
import exchangePortal.exchangePortalApplication.model.RequestKind;
import exchangePortal.exchangePortalApplication.model.RequestStatus;
import exchangePortal.exchangePortalApplication.model.user.Donor;
import exchangePortal.exchangePortalApplication.model.user.Receiver;
import exchangePortal.exchangePortalApplication.repository.DonorRepository;
import exchangePortal.exchangePortalApplication.repository.ReceiverRepository;
import exchangePortal.exchangePortalApplication.repository.RequestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class AdminService {
    private final RequestRepository requestRepository;
    private final DonorRepository donorRepository;
    private final ReceiverRepository receiverRepository;

    public AdminService(RequestRepository requestRepository, DonorRepository donorRepository, ReceiverRepository receiverRepository) {
        this.requestRepository = requestRepository;
        this.donorRepository = donorRepository;
        this.receiverRepository = receiverRepository;
    }

    @Transactional
    public Request approve(String requestId) {
        Request req = requestRepository.findById(requestId)
                .orElseThrow(() -> new IllegalArgumentException("Request not found"));

        if (req.getStatus() != RequestStatus.PENDING) {
            return req;
        }

        req.setStatus(RequestStatus.APPROVED);
        Request saved = requestRepository.save(req);

        if (req.getItem().getKind() == RequestKind.DONATION) {
            Donor donor = donorRepository.findById(req.getCreatedByUserId())
                    .orElseThrow(() -> new IllegalStateException("Donor not found for request"));
            donor.getPendingRequestIds().remove(saved.getId());
            donor.getApprovedRequestIds().add(saved.getId());
            donorRepository.save(donor);
        } else {
            Receiver receiver = receiverRepository.findById(req.getCreatedByUserId())
                    .orElseThrow(() -> new IllegalStateException("Receiver not found for request"));
            receiver.getPendingRequestIds().remove(saved.getId());
            receiver.getApprovedRequestIds().add(saved.getId());
            receiverRepository.save(receiver);
        }

        return saved;
    }

    @Transactional
    public Request reject(String requestId) {
        Request req = requestRepository.findById(requestId)
                .orElseThrow(() -> new IllegalArgumentException("Request not found"));

        if (req.getStatus() != RequestStatus.PENDING) {
            return req;
        }

        req.setStatus(RequestStatus.REJECTED);
        req.getItem().setDeleted(true);
        Request saved = requestRepository.save(req);

        if (req.getItem().getKind() == RequestKind.DONATION) {
            Donor donor = donorRepository.findById(req.getCreatedByUserId())
                    .orElseThrow(() -> new IllegalStateException("Donor not found for request"));
            donor.getPendingRequestIds().remove(saved.getId());
            donorRepository.save(donor);
        } else {
            Receiver receiver = receiverRepository.findById(req.getCreatedByUserId())
                    .orElseThrow(() -> new IllegalStateException("Receiver not found for request"));
            receiver.getPendingRequestIds().remove(saved.getId());
            receiverRepository.save(receiver);
        }

        return saved;
    }

    public List<MatchSuggestion> suggestMatchesByCategory(ItemCategory category) {
        List<Request> donorPending = requestRepository.findByStatusAndItem_CategoryAndItem_Kind(
                RequestStatus.PENDING, category, RequestKind.DONATION
        );
        List<Request> receiverPending = requestRepository.findByStatusAndItem_CategoryAndItem_Kind(
                RequestStatus.PENDING, category, RequestKind.RECEIVING
        );

        List<MatchSuggestion> suggestions = new ArrayList<>();
        int n = Math.min(donorPending.size(), receiverPending.size());
        for (int i = 0; i < n; i++) {
            Request d = donorPending.get(i);
            Request r = receiverPending.get(i);
            suggestions.add(new MatchSuggestion(
                    d.getId(),
                    d.getItem().getName(),
                    r.getId(),
                    r.getItem().getName(),
                    category
            ));
        }
        return suggestions;
    }
}