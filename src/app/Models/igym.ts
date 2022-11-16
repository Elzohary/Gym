export interface Igyms {
  message: string,
  data: Array<Igym>
}

export interface Igym {
    id: number,
    address?: string,
    district?: string,
    commercial_file_url?: string,
    dynamic_link?: string,
    description?: string,
    description_ar?: string,
    gender_type?: string,
    status?: string,
    lat?: number,
    logo_img_url?: string,
    long?: number,
    name?: string,
    owner_id?: number,
    rate?: number,
    is_hot_deal?: boolean,
    verification_code?: null,
    is_featured?: boolean,
    email?: string,
    phone_number?: string,
    country_code?: string,
    enable_notification?: boolean,
    phone_verified?: boolean,
    user_role?: string,
    source?: string,
    description_displayed?: string,
    gym_package?: null
}