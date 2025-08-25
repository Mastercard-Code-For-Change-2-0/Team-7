package exchangePortal.exchangePortalApplication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("requests")
public class Request {
    @Id
    private String id;

    private String createdByUserId;

    private Item item;
    private RequestStatus status = RequestStatus.PENDING;

    public Request() {}

    public Request(String createdByUserId, Item item) {
        this.createdByUserId = createdByUserId;
        this.item = item;
        this.status = RequestStatus.PENDING;
    }

    public String getId() { return id; }
    public String getCreatedByUserId() { return createdByUserId; }
    public Item getItem() { return item; }
    public RequestStatus getStatus() { return status; }

    public void setId(String id) { this.id = id; }
    public void setCreatedByUserId(String createdByUserId) { this.createdByUserId = createdByUserId; }
    public void setItem(Item item) { this.item = item; }
    public void setStatus(RequestStatus status) { this.status = status; }
}