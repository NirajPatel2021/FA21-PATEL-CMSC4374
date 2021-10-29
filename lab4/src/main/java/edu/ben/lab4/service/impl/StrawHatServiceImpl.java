package edu.ben.lab4.service.impl;

import edu.ben.lab4.model.dto.StrawHatDTO;
import edu.ben.lab4.service.StrawHatService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@Service
public class StrawHatServiceImpl implements StrawHatService {

    private static Map<Long, String> strawHatMap = Map.of(
            1L, "Luffy",
            2L, "Zoro",
            3L, "Nami",
            4L, "Usopp",
            5L, "Sanji");

    @Override
    public StrawHatDTO getStrawHat(long id) {
        String name = strawHatMap.get(id);
        if (name == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No More Straw Hats");
        }
        return StrawHatDTO.of(id, strawHatMap.get(id));
    }

    @Override
    public Map<Long, String> getAllStrawHats() {
        return strawHatMap;
    }

    @Override
    public void addStrawHat(StrawHatDTO strawHat) {
        Map<Long, String> strawHatMapTemp = new HashMap<>();
        for (Map.Entry<Long, String> entry : strawHatMap.entrySet()) {
            strawHatMapTemp.put(entry.getKey(), entry.getValue());
        }
        strawHatMapTemp.put(strawHat.getId(), strawHat.getName());
        strawHatMap = strawHatMapTemp;

    }

    @Override
    public void updateStrawHat(Long id, StrawHatDTO strawHat) {
        Map<Long, String> strawHatMapTemp = new HashMap<>();

        for (Map.Entry<Long, String> entry : strawHatMap.entrySet())
        {
            if (entry.getKey() != id)
            {
                strawHatMapTemp.put(entry.getKey(), entry.getValue());
            }
            if (entry.getKey() == id)
            {
                strawHatMapTemp.put(id, strawHat.getName());
            }
        }
        strawHatMapTemp.put(strawHat.getId(), strawHat.getName());
        strawHatMap = strawHatMapTemp;
    }


}




