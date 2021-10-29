package edu.ben.lab4.model.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class StrawHatDTO {
    private Long id;
    private String name;

    public static StrawHatDTO of() {
        return new StrawHatDTO();
    }

    public static StrawHatDTO of(long id) {
        StrawHatDTO result = of();
        result.setId(id);
        return result;
    }

    public static StrawHatDTO of(long id, String name) {
        StrawHatDTO result = of(id);
        result.setName(name);
        return result;
    }


}
