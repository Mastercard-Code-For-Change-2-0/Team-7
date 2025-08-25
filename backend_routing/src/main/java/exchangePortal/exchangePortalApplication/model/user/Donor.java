package exchangePortal.exchangePortalApplication.model.user;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document("donors")
public class Donor extends BaseUser {
    private List<String> pendingRequestIds = new ArrayList<>();
    private List<String> approvedRequestIds = new ArrayList<>();

    public Donor() { super(); }

    public Donor(String name, String username, String password) {
        super(name, username, password);
    }

    public List<String> getPendingRequestIds() { return pendingRequestIds; }
    public List<String> getApprovedRequestIds() { return approvedRequestIds; }

    public void setPendingRequestIds(List<String> pendingRequestIds) { this.pendingRequestIds = pendingRequestIds; }
    public void setApprovedRequestIds(List<String> approvedRequestIds) { this.approvedRequestIds = approvedRequestIds; }
}