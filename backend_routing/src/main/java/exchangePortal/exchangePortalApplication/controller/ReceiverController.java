package exchangePortal.exchangePortalApplication.controller;

import exchangePortal.exchangePortalApplication.dto.CreateRequestDto;
import exchangePortal.exchangePortalApplication.model.Request;
import exchangePortal.exchangePortalApplication.service.ReceiverService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/receivers")
@CrossOrigin(origins = "*")
public class ReceiverController {
    private final ReceiverService receiverService;

    public ReceiverController(ReceiverService receiverService) {
        this.receiverService = receiverService;
    }

    @PostMapping("/{receiverId}/requests")
    public Request createReceiving(@PathVariable String receiverId, @RequestBody CreateRequestDto dto) {
        return receiverService.createReceivingRequest(receiverId, dto);
    }

    @GetMapping("/{receiverId}/requests/pending")
    public List<Request> getPending(@PathVariable String receiverId) {
        return receiverService.getPending(receiverId);
    }

    @GetMapping("/{receiverId}/requests/approved")
    public List<Request> getApproved(@PathVariable String receiverId) {
        return receiverService.getApproved(receiverId);
    }
}