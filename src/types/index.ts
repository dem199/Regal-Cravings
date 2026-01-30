

// Core application types
export interface FoodItem {
  id: number;
  name: string;
  ingredients: string[];
  price: number;
  image: string;
  category: 'Rice' | 'Swallow' | 'Sides' | 'Drinks';
}

export type CartItem = FoodItem & { qty: number };

export type ViewType = 'menu' | 'about';

export type ModalStep = 'closed' | 'form' | 'loading' | 'success';

export interface PaystackResponse {
  reference: string;
  trans: string;
  status: string;
  message: string;
  transaction: string;
}

export interface PaystackConfig {
  reference: string;
  email: string;
  amount: number;
  publicKey: string;
}

export interface NavbarProps {
  cartCount: number;
  setView: (view: ViewType) => void;
  currentView: ViewType;
  onOpenCart: () => void;
}

export interface MenuCardProps {
  item: FoodItem;
  onAdd: (item: FoodItem, quantity: number) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export interface CheckoutModalProps {
  step: ModalStep;
  userName: string;
  userEmail: string;
  setUserEmail: (email: string) => void;
  setUserName: (name: string) => void;
  onPaystackSuccess: (reference: PaystackResponse) => void;
  onClose: () => void;
  total: number;
}

export interface EmailParams {
  customer_name: string;
  customer_email: string;
  message: string;
  payment_ref: string;
  total_price: string;
}