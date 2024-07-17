export interface IComponent {
    id?: string | any ;
    name?: string;
    componentBuyPrice?: number;
    addingComponentDate?: Date;
    minQuantity?: number;
    stockQuantity?: number;
    isActive?: boolean;
    adminId?: string;
    isSoldSeparately?: boolean;
    description?: string;
    totalPrice?: number;
    componentImages?: string[];
    purchasePrice?: string;
    isOnSale?: boolean;
    salePercentage?: number;
    componentColor?: string;
    componentSize?: string;
    bussinesId?: string;
    images?: File[];
    salePrice?: string;
    isAlone?: boolean;

}
