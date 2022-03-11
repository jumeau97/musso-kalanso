package com.example.mussokalanso.mussokalansoBack.Categorie;

import com.example.mussokalanso.mussokalansoBack.Module.Module;
import com.example.mussokalanso.mussokalansoBack.Module.ModuleRepository;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategorieService {

    @Autowired
    CategorieRepository categorieRepository;
    @Autowired
    ModuleRepository moduleRepository;

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

     //delete category

    public Response deleteCategory(Long id){
        Categorie cat = categorieRepository.findById(id).get();
        List<Module> m = moduleRepository.findByCategorie(cat);



            if(m.isEmpty()){
                categorieRepository.delete(cat);
                return Response.success("suppression reussie avec succès");
            }else {
                return Response.error("suppression reussie avec succès");

            }


    }

    //publish category
    public Response publish(Long id){
        Categorie c =categorieRepository.getById(id);

        try{
            if(c != null){
                c.setEtat(true);
                categorieRepository.save(c);
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("mis à l'etat publier");
    }


    //unpublish category
    public Response unpublish(Long id){
        Categorie c =categorieRepository.getById(id);

        try{
            if(c != null){
                c.setEtat(false);
                categorieRepository.save(c);
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("mis à l'etat dépublier");
    }

    //list of category published
    public Response categoryPublished(){
        List<Categorie> listCat = new ArrayList<>();
        try{
            listCat = categorieRepository.findAllByEtatTrue();
        }catch(Exception e){
            e.printStackTrace(System.out);
        }
        return Response.with("la liste retournée", listCat);
    }

    //details category by id

    public Response findCategoryById(Long id){
        Optional<Categorie> categorie = categorieRepository.findById(id);

        try {


        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.with("details category", categorie);
    }


}
