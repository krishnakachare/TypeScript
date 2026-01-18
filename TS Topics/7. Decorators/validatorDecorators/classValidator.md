This usually refers to the **`class-validator`** library used with DTOs in NestJS and backend apps.

Below is the **complete list of default/built-in class-validator decorators** with clear explanations 👇

---

# ✅ What is `class-validator`?

It validates **class properties** using decorators at runtime.

```ts
import { validate } from "class-validator";

class UserDTO {
  @IsEmail()
  email: string;

  @Length(6, 12)
  password: string;
}
```

---

# ✅ 1. Common Validators

| Decorator            | Description                                        |
| -------------------- | -------------------------------------------------- |
| `@IsDefined()`       | Value must not be `undefined`                      |
| `@IsOptional()`      | Skips validation if value is `null` or `undefined` |
| `@Equals(value)`     | Must be exactly equal to given value               |
| `@NotEquals(value)`  | Must not be equal                                  |
| `@IsIn(values[])`    | Must be one of given values                        |
| `@IsNotIn(values[])` | Must not be one of given values                    |

---

# ✅ 2. Type Validators

| Decorator            | Description               |
| -------------------- | ------------------------- |
| `@IsString()`        | Must be string            |
| `@IsNumber()`        | Must be number            |
| `@IsInt()`           | Must be integer           |
| `@IsBoolean()`       | Must be boolean           |
| `@IsArray()`         | Must be array             |
| `@IsObject()`        | Must be object            |
| `@IsEnum(enum)`      | Must be enum value        |
| `@IsDate()`          | Must be Date object       |
| `@IsInstance(Class)` | Must be instance of class |

---

# ✅ 3. String Validators

| Decorator                 | Description                |
| ------------------------- | -------------------------- |
| `@Length(min, max)`       | String length range        |
| `@MinLength(n)`           | Minimum length             |
| `@MaxLength(n)`           | Maximum length             |
| `@Contains(str)`          | Must contain substring     |
| `@NotContains(str)`       | Must NOT contain substring |
| `@IsEmail()`              | Valid email                |
| `@IsUrl()`                | Valid URL                  |
| `@IsUUID()`               | Valid UUID                 |
| `@IsAlpha()`              | Only letters               |
| `@IsAlphanumeric()`       | Letters + numbers          |
| `@IsAscii()`              | ASCII characters only      |
| `@IsBase64()`             | Base64 string              |
| `@IsHexColor()`           | Hex color code             |
| `@IsJSON()`               | Valid JSON string          |
| `@IsJWT()`                | Valid JWT token            |
| `@IsPhoneNumber(region?)` | Valid phone number         |
| `@IsPostalCode(locale)`   | Valid postal code          |
| `@IsLowercase()`          | Lowercase only             |
| `@IsUppercase()`          | Uppercase only             |
| `@Matches(regex)`         | Must match regex           |

---

# ✅ 4. Number Validators

| Decorator           | Description            |
| ------------------- | ---------------------- |
| `@Min(n)`           | Minimum value          |
| `@Max(n)`           | Maximum value          |
| `@IsPositive()`     | Must be > 0            |
| `@IsNegative()`     | Must be < 0            |
| `@IsDivisibleBy(n)` | Must be divisible by n |
| `@IsDecimal()`      | Must be decimal        |
| `@IsLatitude()`     | Latitude coordinate    |
| `@IsLongitude()`    | Longitude coordinate   |

---

# ✅ 5. Array Validators

| Decorator                     | Description                   |
| ----------------------------- | ----------------------------- |
| `@ArrayNotEmpty()`            | Array must not be empty       |
| `@ArrayMinSize(n)`            | Minimum elements              |
| `@ArrayMaxSize(n)`            | Maximum elements              |
| `@ArrayContains(values[])`    | Must contain given values     |
| `@ArrayNotContains(values[])` | Must NOT contain given values |
| `@ArrayUnique()`              | All values must be unique     |

---

# ✅ 6. Date Validators

| Decorator         | Description                    |
| ----------------- | ------------------------------ |
| `@MinDate(date)`  | Date must be after given date  |
| `@MaxDate(date)`  | Date must be before given date |
| `@IsDateString()` | Must be ISO date string        |

---

# ✅ 7. Nested Object Validators

| Decorator             | Description                     |
| --------------------- | ------------------------------- |
| `@ValidateNested()`   | Validates nested object         |
| `@Type(() => Class)`  | Required with class-transformer |
| `@IsNotEmptyObject()` | Object must not be empty        |

---

# ✅ 8. Conditional Validators

| Decorator         | Description                            |
| ----------------- | -------------------------------------- |
| `@ValidateIf(fn)` | Runs validation only if condition true |

---

# ✅ 9. Custom Validators

| Decorator                    | Description                 |
| ---------------------------- | --------------------------- |
| `@Validate(CustomValidator)` | Uses custom validator class |
| `@ValidatorConstraint()`     | Marks class as validator    |

---

# ✅ 10. Non-Empty Validators

| Decorator       | Description                                   |
| --------------- | --------------------------------------------- |
| `@IsNotEmpty()` | Must not be empty (`""`, `null`, `undefined`) |

---

# ✅ Example DTO (Real-world)

```ts
class CreateUserDTO {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsInt()
  @Min(18)
  age: number;

  @IsOptional()
  @IsPhoneNumber("IN")
  phone?: string;
}
```

---

# 🧠 Summary

| Category          | Purpose                    |
| ----------------- | -------------------------- |
| Type validators   | Validate data types        |
| String validators | Email, URL, regex, formats |
| Number validators | Ranges, positivity         |
| Array validators  | Size, uniqueness           |
| Date validators   | Date range                 |
| Nested validators | Object validation          |
| Conditional       | Conditional checks         |
| Custom            | Custom logic               |
