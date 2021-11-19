package edu.ben.lab6.resource;

import edu.ben.lab6.model.dto.ItemDTO;
import edu.ben.lab6.service.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController()
@RequestMapping(value = "api/list", produces = "application/json")
public class ItemResource {

    private final ItemService itemService;

    public ItemResource(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping(value = "/{id}")
    public ItemDTO getOneItem(@PathVariable int id) {
        return itemService.getOneItem(id);
    }

    @GetMapping()
    public Map<Integer, ItemDTO> getAllItems() {
        return itemService.getAllItems();
    }

    @PostMapping(value = "/createItem", consumes = "application/json", produces = "application/json")
    public ItemDTO createItem(@RequestBody ItemDTO item) {
        return this.itemService.createItem(item);
    }

    @PutMapping(value = "/updateItem", consumes = "application/json", produces = "application/json")
    public ItemDTO updateItem(@RequestBody ItemDTO item) {
        return this.itemService.updateItem(item);
    }

    @PutMapping(value = "/markDone", consumes = "application/json", produces = "application/json")
    public void markDone(@RequestBody ItemDTO item) {
        this.itemService.markDone(item);
    }

    @DeleteMapping(value = "/deleteItem/{id}")
    public void deleteItem(@PathVariable int id) {

        this.itemService.deleteItem(id);
    }



}
