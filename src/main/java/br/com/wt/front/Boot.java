package br.com.wt.front;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.stereotype.Controller;

@SpringBootApplication
@Controller
@ComponentScan
public class Boot
{

   public static void main(String[] args)
   {
      SpringApplication.run(Boot.class, args);
   }

   @RequestMapping("/poc_pucminas")
   @ResponseBody
   public String home()
   {
      return "index";
   }
}
