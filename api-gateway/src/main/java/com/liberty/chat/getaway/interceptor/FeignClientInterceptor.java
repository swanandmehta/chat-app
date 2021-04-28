/**
 * 
 */
package com.liberty.chat.getaway.interceptor;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.OAuth2AccessToken;

import feign.RequestInterceptor;
import feign.RequestTemplate;

/**
 * @author Swanand
 *
 */
public class FeignClientInterceptor implements RequestInterceptor {
	
	private final OAuth2AuthorizedClientService clientService;

    public FeignClientInterceptor(OAuth2AuthorizedClientService clientService) {
        this.clientService = clientService;
    }

	@Override
	public void apply(RequestTemplate template) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
        OAuth2AuthorizedClient client = clientService.loadAuthorizedClient(
                oauthToken.getAuthorizedClientRegistrationId(),
                oauthToken.getName());

        OAuth2AccessToken accessToken = client.getAccessToken();
        template.header("Authorization", String.format("%s %s", "Bearer", accessToken.getTokenValue()));
    }

}
