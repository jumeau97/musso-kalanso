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

    //insert new category
    public Response saveCategory(Categorie categorie){

        try{
            categorieRepository.save(categorie);
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.success("insertion reussie");
    }

    //update category
    public  Response updateCategory(Categorie categorie, Long id){

        try{
            Categorie m = categorieRepository.getById(id);
            if(m!=null) {
                m.setLibelle(categorie.getLibelle());
                categorieRepository.save(m);
            }
            }catch(Exception e) {
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
            }

            return Response.success("modification reussie");
        }


}
