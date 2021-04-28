/**
 * 
 */
package com.liberty.chat.getaway.beans;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;

import com.liberty.chat.getaway.interceptor.FeignClientInterceptor;

import feign.RequestInterceptor;

/**
 * @author Swanand
 *
 */
@Configuration
public class ConfigurationBeanUtils {
	
	@Bean
	public RequestInterceptor getUserFeignClientInterceptor(OAuth2AuthorizedClientService clientService) {
	    return new FeignClientInterceptor(clientService);
	}

}
