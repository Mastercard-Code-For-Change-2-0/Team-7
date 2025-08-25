package exchangePortal.exchangePortalApplication.dto;


import exchangePortal.exchangePortalApplication.model.ItemCategory;

public class MatchSuggestion {
    public String donorRequestId;
    public String donorItemName;
    public String receiverRequestId;
    public String receiverItemName;
    public ItemCategory category;

    public MatchSuggestion(String donorRequestId, String donorItemName, String receiverRequestId, String receiverItemName, ItemCategory category) {
        this.donorRequestId = donorRequestId;
        this.donorItemName = donorItemName;
        this.receiverRequestId = receiverRequestId;
        this.receiverItemName = receiverItemName;
        this.category = category;
    }
}
