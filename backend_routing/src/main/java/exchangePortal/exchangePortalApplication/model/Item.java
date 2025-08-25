package exchangePortal.exchangePortalApplication.model;

import org.springframework.data.annotation.Id;

public class Item {
    @Id
    private String id;
    private boolean deleted;
    private String name;
    private ItemCategory category;
    private RequestKind kind;

    public Item() {}

    public Item(String name, ItemCategory category, RequestKind kind) {
        this.name = name;
        this.category = category;
        this.kind = kind;
        this.deleted = false;
    }

    public String getId() { return id; }
    public boolean isDeleted() { return deleted; }
    public String getName() { return name; }
    public ItemCategory getCategory() { return category; }
    public RequestKind getKind() { return kind; }

    public void setId(String id) { this.id = id; }
    public void setDeleted(boolean deleted) { this.deleted = deleted; }
    public void setName(String name) { this.name = name; }
    public void setCategory(ItemCategory category) { this.category = category; }
    public void setKind(RequestKind kind) { this.kind = kind; }
}
