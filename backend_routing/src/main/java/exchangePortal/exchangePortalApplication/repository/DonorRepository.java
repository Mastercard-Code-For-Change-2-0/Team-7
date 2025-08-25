package exchangePortal.exchangePortalApplication.repository;

import exchangePortal.exchangePortalApplication.model.Request;
import exchangePortal.exchangePortalApplication.model.RequestStatus;
import exchangePortal.exchangePortalApplication.model.RequestKind;
import exchangePortal.exchangePortalApplication.model.ItemCategory;
import exchangePortal.exchangePortalApplication.model.user.Donor;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface DonorRepository extends MongoRepository<Donor, String> {
    Optional<Donor> findByUsername(String username);
}