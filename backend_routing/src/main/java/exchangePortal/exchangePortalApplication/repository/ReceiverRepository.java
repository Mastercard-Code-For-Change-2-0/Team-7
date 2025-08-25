package exchangePortal.exchangePortalApplication.repository;
import exchangePortal.exchangePortalApplication.model.user.Receiver;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ReceiverRepository extends MongoRepository<Receiver, String> {
    Optional<Receiver> findByUsername(String username);
}
