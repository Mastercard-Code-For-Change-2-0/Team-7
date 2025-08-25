package exchangePortal.exchangePortalApplication.controller;


import exchangePortal.exchangePortalApplication.dto.CreateRequestDto;
import exchangePortal.exchangePortalApplication.model.Request;
import exchangePortal.exchangePortalApplication.service.DonorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/donors")
@CrossOrigin(origins = "*")
public class DonorController {
    private final DonorService donorService;

    public DonorController(DonorService donorService) {
        this.donorService = donorService;
    }

    @PostMapping("/{donorId}/requests")
    public Request createDonation(@PathVariable String donorId, @RequestBody CreateRequestDto dto) {
        return donorService.createDonationRequest(donorId, dto);
    }

    @GetMapping("/{donorId}/requests/pending")
    public List<Request> getPending(@PathVariable String donorId) {
        return donorService.getPending(donorId);
    }

    @GetMapping("/{donorId}/requests/approved")
    public List<Request> getApproved(@PathVariable String donorId) {
        return donorService.getApproved(donorId);
    }
}