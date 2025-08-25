package exchangePortal.exchangePortalApplication.model.user;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("admins")
public class Admin extends BaseUser {
    public Admin() { super(); }
    public Admin(String name, String username, String password) {
        super(name, username, password);
    }
}