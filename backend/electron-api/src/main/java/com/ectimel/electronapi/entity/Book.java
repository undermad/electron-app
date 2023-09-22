package com.ectimel.electronapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Arrays;
import java.util.Objects;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "book", schema = "reactlibrarydatabase")
public class Book {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "author")
    private String author;
    @Column(name = "description")
    private String description;
    @Column(name = "copies")
    private Integer copies;
    @Column(name = "copies_available")
    private Integer copiesAvailable;
    @Column(name = "category")
    private String category;
    @Column(name = "img")
    private String img;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Book that = (Book) o;

        if (id != that.id) return false;
        if (!Objects.equals(title, that.title)) return false;
        if (!Objects.equals(author, that.author)) return false;
        if (!Objects.equals(description, that.description)) return false;
        if (!Objects.equals(copies, that.copies)) return false;
        if (!Objects.equals(copiesAvailable, that.copiesAvailable))
            return false;
        if (!Objects.equals(category, that.category)) return false;
        return !Objects.equals(img, that.img);
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (author != null ? author.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (copies != null ? copies.hashCode() : 0);
        result = 31 * result + (copiesAvailable != null ? copiesAvailable.hashCode() : 0);
        result = 31 * result + (category != null ? category.hashCode() : 0);
        result = 31 * result + (img != null ? img.hashCode() : 0);
        return result;
    }
}
