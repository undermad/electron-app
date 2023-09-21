package com.ectimel.electronapi.repository;

import com.ectimel.electronapi.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
