package com.example.mussokalanso.mussokalansoBack;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.mussokalanso.mussokalansoBack.Apprenant.ApprenantControler;
import com.example.mussokalanso.mussokalansoBack.Apprenant.ApprenantService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(controllers = ApprenantControler.class)
public class ApprenantControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ApprenantService apprenantService;

  //  @Test
  /*  public void testGetApprenants() throws Exception {
        mockMvc.perform(get("/api/mussokalanso/learn/all/learner")).
                andExpect(status().isOk())
                .andExpect(jsonPath("",  is("200")));
    }*/
}
