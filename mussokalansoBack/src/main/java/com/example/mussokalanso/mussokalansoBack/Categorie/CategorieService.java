package com.example.mussokalanso.mussokalansoBack.Categorie;

import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategorieService {

    @Autowired
    CategorieRepository categorieRepository;

    //all category
    public Response allCategory(){
        List<Categorie> ctg= new ArrayList();
        try{
            ctg=categorieRepository.findAll();

        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.with("",ctg);
    }
}
