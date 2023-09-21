package com.ectimel.electronapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "checkout", schema = "reactlibrarydatabase")
public class Checkout {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "user_email")
    private String userEmail;
    @Basic
    @Column(name = "checkout_date")
    private String checkoutDate;
    @Basic
    @Column(name = "return_date")
    private String returnDate;
    @Basic
    @Column(name = "book_id")
    private Long bookId;



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Checkout that = (Checkout) o;

        if (id != that.id) return false;
        if (!Objects.equals(userEmail, that.userEmail)) return false;
        if (!Objects.equals(checkoutDate, that.checkoutDate)) return false;
        if (!Objects.equals(returnDate, that.returnDate)) return false;
        return Objects.equals(bookId, that.bookId);
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (userEmail != null ? userEmail.hashCode() : 0);
        result = 31 * result + (checkoutDate != null ? checkoutDate.hashCode() : 0);
        result = 31 * result + (returnDate != null ? returnDate.hashCode() : 0);
        result = 31 * result + (bookId != null ? bookId.hashCode() : 0);
        return result;
    }
}
