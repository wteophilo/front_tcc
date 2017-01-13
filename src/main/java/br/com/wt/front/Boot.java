package br.com.wt.front;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.wt.front.config.PreFilter;

@SpringBootApplication
@EnableAutoConfiguration
@EnableZuulProxy
@ComponentScan
public class Boot {

	public static void main(String[] args) {
		SpringApplication.run(Boot.class, args);
	}

	@RequestMapping("/poc_pucminas/")
	@ResponseBody
	public String home() {
		return "index";
	}

	@Bean
	public PreFilter preFilter() {
		return new PreFilter();
	}
}