package com.shaya.woo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.shaya.woo.entities.Company;
import com.shaya.woo.entities.Link;
import com.shaya.woo.entities.Position;

@RepositoryRestResource(path="positions")
public interface PlaySpringDataRepository extends JpaRepository<Position, Long>{
	
}


