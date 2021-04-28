/**
 * 
 */
package com.liberty.chat.userservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

/**
 * @author Swanand
 *
 */
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}
	
}
