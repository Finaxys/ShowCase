package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Job;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Job entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JobRepository extends MongoRepository<Job, String> {

}
