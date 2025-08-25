package exchangePortal.exchangePortalApplication.repository;

import exchangePortal.exchangePortalApplication.model.Request;
import exchangePortal.exchangePortalApplication.model.RequestStatus;
import exchangePortal.exchangePortalApplication.model.RequestKind;
import exchangePortal.exchangePortalApplication.model.ItemCategory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RequestRepository extends MongoRepository<Request, String> {
    List<Request> findByCreatedByUserIdAndStatus(String createdByUserId, RequestStatus status);
    List<Request> findByStatusAndItem_CategoryAndItem_Kind(RequestStatus status, ItemCategory category, RequestKind kind);
}