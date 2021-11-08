package com.cg.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

//    id, users_code, full_name, dob, cardIssueDate,
//    expirationDate, phone, user_name, password,
//    position, status, roles_id
    private String userCode;
    private String fullName;
    private Date dob;
    private Date cardIssueDate;
    private Date expirationDate;
    private String phone;
    private String userName;
    private String password;
    private int position;
    private int status;
    private int role;

}
