package exchangePortal.exchangePortalApplication.controller;


import exchangePortal.exchangePortalApplication.dto.MatchSuggestion;
import exchangePortal.exchangePortalApplication.model.ItemCategory;
import exchangePortal.exchangePortalApplication.model.Request;
import exchangePortal.exchangePortalApplication.service.AdminService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/requests/{requestId}/approve")
    public Request approve(@PathVariable String requestId) {
        return adminService.approve(requestId);
    }

    @PostMapping("/requests/{requestId}/reject")
    public Request reject(@PathVariable String requestId) {
        return adminService.reject(requestId);
    }

    @GetMapping("/matches")
    public List<MatchSuggestion> suggest(@RequestParam ItemCategory category) {
        return adminService.suggestMatchesByCategory(category);
    }
}