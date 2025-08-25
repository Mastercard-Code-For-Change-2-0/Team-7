package exchangePortal.exchangePortalApplication.service;

import exchangePortal.exchangePortalApplication.dto.CreateRequestDto;
import exchangePortal.exchangePortalApplication.model.Item;
import exchangePortal.exchangePortalApplication.model.Request;
import exchangePortal.exchangePortalApplication.model.RequestKind;
import exchangePortal.exchangePortalApplication.model.RequestStatus;
import exchangePortal.exchangePortalApplication.model.user.Donor;
import exchangePortal.exchangePortalApplication.repository.DonorRepository;
import exchangePortal.exchangePortalApplication.repository.RequestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DonorService {
    private final DonorRepository donorRepository;
    private final RequestRepository requestRepository;

    public DonorService(DonorRepository donorRepository, RequestRepository requestRepository) {
        this.donorRepository = donorRepository;
        this.requestRepository = requestRepository;
    }

    @Transactional
    public Request createDonationRequest(String donorId, CreateRequestDto dto) {
        Donor donor = donorRepository.findById(donorId)
                .orElseThrow(() -> new IllegalArgumentException("Donor not found"));

        Item item = new Item(dto.name, dto.category, RequestKind.DONATION);
        Request request = new Request(donor.getId(), item);
        Request saved = requestRepository.save(request);

        donor.getPendingRequestIds().add(saved.getId());
        donorRepository.save(donor);

        return saved;
    }

    public List<Request> getPending(String donorId) {
        return requestRepository.findByCreatedByUserIdAndStatus(donorId, RequestStatus.PENDING);
    }

    public List<Request> getApproved(String donorId) {
        return requestRepository.findByCreatedByUserIdAndStatus(donorId, RequestStatus.APPROVED);
    }
}

