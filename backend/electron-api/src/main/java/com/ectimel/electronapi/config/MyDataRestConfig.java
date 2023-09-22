package com.ectimel.electronapi.config;

import com.ectimel.electronapi.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private String theAllowedOrigins = "http://localhost:5173";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){

        HttpMethod[] theUnsupportedAction = {HttpMethod.POST, HttpMethod.PATCH, HttpMethod.DELETE, HttpMethod.PUT};

        config.exposeIdsFor(Book.class);

        disableHttpMethods(Book.class, config, theUnsupportedAction);

        cors.addMapping(config.getBasePath() + "/**").allowedOrigins(theAllowedOrigins);

    }

    private void disableHttpMethods(Class<Book> bookClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedAction) {
        config.getExposureConfiguration()
                .forDomainType(bookClass)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedAction))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedAction)));

    }
}
