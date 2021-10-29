package edu.ben.lab4.service;

import edu.ben.lab4.model.dto.StrawHatDTO;

import java.util.Map;

public interface StrawHatService {

    StrawHatDTO getStrawHat(long id);

    Map<Long, String> getAllStrawHats();

    void addStrawHat(StrawHatDTO strawHat);

    void updateStrawHat(Long id, StrawHatDTO strawHat);
}
