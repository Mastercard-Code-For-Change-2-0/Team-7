package exchangePortal.exchangePortalApplication.model.user;

import org.springframework.data.annotation.Id;

public abstract class BaseUser {
    @Id
    private String id;
    private String name;
    private String username;
    private String password;

    public BaseUser() {}

    public BaseUser(String name, String username, String password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public String getUsername() { return username; }
    public String getPassword() { return password; }

    public void setId(String id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setUsername(String username) { this.username = username; }
    public void setPassword(String password) { this.password = password; }
}