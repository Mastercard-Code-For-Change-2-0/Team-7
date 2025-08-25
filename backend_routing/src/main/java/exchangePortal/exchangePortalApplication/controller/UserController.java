package exchangePortal.exchangePortalApplication.controller;


import exchangePortal.exchangePortalApplication.model.user.Admin;
import exchangePortal.exchangePortalApplication.model.user.Donor;
import exchangePortal.exchangePortalApplication.model.user.Receiver;
import exchangePortal.exchangePortalApplication.repository.AdminRepository;
import exchangePortal.exchangePortalApplication.repository.DonorRepository;
import exchangePortal.exchangePortalApplication.repository.ReceiverRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {
    private final DonorRepository donorRepository;
    private final ReceiverRepository receiverRepository;
    private final AdminRepository adminRepository;

    public UserController(DonorRepository donorRepository, ReceiverRepository receiverRepository, AdminRepository adminRepository) {
        this.donorRepository = donorRepository;
        this.receiverRepository = receiverRepository;
        this.adminRepository = adminRepository;
    }

    @PostMapping("/donors")
    public Donor createDonor(@RequestBody Donor donor) {
        return donorRepository.save(donor);
    }

    @PostMapping("/receivers")
    public Receiver createReceiver(@RequestBody Receiver receiver) {
        return receiverRepository.save(receiver);
    }

    @PostMapping("/admins")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminRepository.save(admin);
    }
}