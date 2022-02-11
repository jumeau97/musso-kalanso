package com.example.mussokalanso.mussokalansoBack.payload;

public class Response {
    public String status= null;
    public String msg= null;
    public Object body=null;

    public Response(String status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    public Response(String status, String msg, Object body) {
        this.status = status;
        this.msg = msg;
        this.body = body;
    }

    public static Response error(String msg){return new Response("KO", msg);}

    public static Response success(String msg){return new Response("OK", msg);}

    public static Response with(String msg,Object body){return new Response("OK", msg, body);}
}
