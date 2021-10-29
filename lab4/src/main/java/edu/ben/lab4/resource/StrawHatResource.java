package edu.ben.lab4.resource;

import edu.ben.lab4.model.dto.StrawHatDTO;
import edu.ben.lab4.service.StrawHatService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController()
@RequestMapping(value = "api/example", produces = "application/json")
public class StrawHatResource {

    private final StrawHatService strawHatService;

    public StrawHatResource(StrawHatService strawHatService) {
        this.strawHatService = strawHatService;
    }

    @GetMapping()
    public Map<Long, String> getAll() {
        return strawHatService.getAllStrawHats();
    }

    @GetMapping(value = "/{id}")
    public StrawHatDTO getOne(@PathVariable Long id) {
        if (id == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can Not Be Null");
        }
        return strawHatService.getStrawHat(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addStrawHat(@RequestBody StrawHatDTO strawHat) {
        strawHatService.addStrawHat(strawHat);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public void updateStrawHat( @PathVariable Long id, @RequestBody StrawHatDTO strawHat) {
        strawHatService.updateStrawHat(id, strawHat);
    }




}
