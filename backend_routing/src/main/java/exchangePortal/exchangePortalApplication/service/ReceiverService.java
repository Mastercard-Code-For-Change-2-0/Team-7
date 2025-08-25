package exchangePortal.exchangePortalApplication.service;

import exchangePortal.exchangePortalApplication.dto.CreateRequestDto;
import exchangePortal.exchangePortalApplication.model.Item;
import exchangePortal.exchangePortalApplication.model.Request;
import exchangePortal.exchangePortalApplication.model.RequestKind;
import exchangePortal.exchangePortalApplication.model.RequestStatus;
import exchangePortal.exchangePortalApplication.model.user.Receiver;
import exchangePortal.exchangePortalApplication.repository.ReceiverRepository;
import exchangePortal.exchangePortalApplication.repository.RequestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReceiverService {
    private final ReceiverRepository receiverRepository;
    private final RequestRepository requestRepository;

    public ReceiverService(ReceiverRepository receiverRepository, RequestRepository requestRepository) {
        this.receiverRepository = receiverRepository;
        this.requestRepository = requestRepository;
    }

    @Transactional
    public Request createReceivingRequest(String receiverId, CreateRequestDto dto) {
        Receiver receiver = receiverRepository.findById(receiverId)
                .orElseThrow(() -> new IllegalArgumentException("Receiver not found"));

        Item item = new Item(dto.name, dto.category, RequestKind.RECEIVING);
        Request request = new Request(receiver.getId(), item);
        Request saved = requestRepository.save(request);

        receiver.getPendingRequestIds().add(saved.getId());
        receiverRepository.save(receiver);

        return saved;
    }

    public List<Request> getPending(String receiverId) {
        return requestRepository.findByCreatedByUserIdAndStatus(receiverId, RequestStatus.PENDING);
    }

    public List<Request> getApproved(String receiverId) {
        return requestRepository.findByCreatedByUserIdAndStatus(receiverId, RequestStatus.APPROVED);
    }
}
