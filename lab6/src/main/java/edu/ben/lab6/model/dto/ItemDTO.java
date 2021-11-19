package edu.ben.lab6.model.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ItemDTO {
    private int id;
    private String item;
    private boolean done;

    public static ItemDTO of() {
        return new ItemDTO();
    }

    public static ItemDTO of(int id) {
        ItemDTO result = of();
        result.setId(id);
        return result;
    }

    public static ItemDTO of(int id, String item, boolean done) {
        ItemDTO result = of(id);
        result.setItem(item);
        result.setDone(done);
        return result;
    }


}
