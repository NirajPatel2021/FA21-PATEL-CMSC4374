package edu.ben.lab6.service;

import edu.ben.lab6.model.dto.ItemDTO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@Service
public class ItemService {

    Integer currentId = 11;

    public ItemService() {
    }

    public ItemDTO getOneItem(int id) {
        try {
            int text = realItemMap.get(id).getId();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This item does not exist");
        }
        return realItemMap.get(id);
    }

    public Map<Integer, ItemDTO> getAllItems() {
        return realItemMap;
    }

    public ItemDTO createItem(ItemDTO item) {
        item.setId(currentId);
        realItemMap.put(currentId, item);
        currentId += 1;
        return item;
    }

    public ItemDTO updateItem(ItemDTO item) {
        realItemMap.get(item.getId()).setItem(item.getItem());
        return realItemMap.get(item.getId());
    }

    public void deleteItem(int id) {
        realItemMap.get(id).setItem("THIS ITEM IS DELETED");
    }

    public void markDone(ItemDTO item)
    {
        realItemMap.get(item.getId()).setDone(true);
    }



    private static Map<Integer, ItemDTO> itemMap = Map.of(
            1, ItemDTO.of(1, "Buy Milk", false),
            2, ItemDTO.of(2, "Vacuum Kitchen", true),
            3, ItemDTO.of(3, "Take Out Trash", false),
            4, ItemDTO.of(4, "Finish Lab6", true),
            5, ItemDTO.of(5, "Call Doctor", false),
            6, ItemDTO.of(6, "Get Haircut", true),
            7, ItemDTO.of(7, "Finish Painting", false),
            8, ItemDTO.of(8, "Fill Up Gas", true),
            9, ItemDTO.of(9, "Buy Juice", false),
            10, ItemDTO.of(10, "Clean Room", true));


    private static Map<Integer, ItemDTO> realItemMap = new HashMap<>(itemMap);


}

