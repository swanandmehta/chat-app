/**
 * 
 */
package com.liberty.chat.userservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Swanand
 *
 */
@RestController
@RequestMapping()
public class UserController {

	@GetMapping
	public String hello() {
		return "Hello";
	}
	
}
