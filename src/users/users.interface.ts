export interface CreateUserDto {
    username: string;
    birthdate: string;
}

export interface UpdateUserDto extends Partial<CreateUserDto> {
    id: number;
}

export interface Users {
    id: number;
    username: string;
    birthdate: string;
}