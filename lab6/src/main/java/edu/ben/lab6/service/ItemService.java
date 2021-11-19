package edu.ben.lab6.service;

import edu.ben.lab6.model.dto.ItemDTO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@Service
public class ItemService {

    Integer currentId = 11;

    public ItemService() {
    }

    public ItemDTO getOneItem(int id) {
        try {
            int text = itemMap.get(id).getId();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This item does not exist");
        }
        return itemMap.get(id);
    }

    public Map<Integer, ItemDTO> getAllItems() {
        return itemMap;
    }

    public ItemDTO createItem(ItemDTO item) {
        item.setId(currentId);
        itemMap.put(currentId, item);
        currentId += 1;
        return item;
    }

    public ItemDTO updateItem(ItemDTO item) {
        itemMap.get(item.getId()).setItem(item.getItem());
        return itemMap.get(item.getId());
    }

    public ItemDTO deleteItem(int id) {
        return itemMap.remove(id);
    }

    private static Map<Integer, ItemDTO> itemMap = Map.of(
            1, ItemDTO.of(1, "Buy Milk", false),
            2, ItemDTO.of(2, "Vacuum Kitchen", false),
            3, ItemDTO.of(3, "Take Out Trash", false),
            4, ItemDTO.of(4, "Finish Lab6", false),
            5, ItemDTO.of(5, "Call Doctor", false),
            6, ItemDTO.of(6, "Get Haircut", false),
            7, ItemDTO.of(7, "Finish Painting", false),
            8, ItemDTO.of(8, "Fill Up Gas", false),
            9, ItemDTO.of(9, "Buy Juice", false),
            10, ItemDTO.of(10, "Clean Room", false));

}
