/**
 * 
 */
package com.liberty.chat.userservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * @author Swanand
 *
 */
@Configuration
public class OktaOAuth2WebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().disable()
			.authorizeRequests().anyRequest().authenticated()
			.and()
			.oauth2ResourceServer().jwt();
	}
}
