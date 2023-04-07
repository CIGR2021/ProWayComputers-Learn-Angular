export interface IProduct {
  id: number;
  name: string;
  price: number;
  descriptionPrice: string;
  image: string;
  quantityInStock: number;
  discount?: number;
}

export interface ICartItems extends IProduct {
  quantity: number
}

export const products: IProduct[] = [
  { id: 1, name: "Mouse gamer", price: 439.00, descriptionPrice: "À vista no PIX", image: "/assets/mouse-3.jpg", quantityInStock: 10},
  { id: 2, name: "Monitor muito bom", price: 1200.50, descriptionPrice: "À vista no PIX", discount: 2000.00, image: "/assets/monitor-1.jpg", quantityInStock: 10},
  { id: 3, name: "Teclado excelente", price: 749.99, descriptionPrice: "À vista no PIX", image: "/assets/teclado-1.jpg", quantityInStock: 10},
  { id: 4, name: "Fone para quem joga FPS", price: 599.99, descriptionPrice: "À vista no PIX", image: "/assets/fone-de-ouvido-2.jpg", quantityInStock: 10},
  { id: 5, name: "Fone de ouvido", price: 299.99, descriptionPrice: "À vista no PIX", image: "/assets/fone-de-ouvido-1.jpg", quantityInStock: 10},
  { id: 6, name: "Fone de ouvido bom", price: 399.99, descriptionPrice: "À vista no PIX", image: "/assets/fone-de-ouvido-3.jpg", quantityInStock: 10},
  { id: 7, name: "HD 1TB", price: 499.99, descriptionPrice: "À vista no PIX", image: "/assets/hd.jpg", quantityInStock: 10},
  { id: 8, name: "Combo de placa de vídeos", price: 18449.99, descriptionPrice: "À vista no PIX", image: "/assets/placa-video.jpg", quantityInStock: 10},
  { id: 9, name: "Processador Ryzen", price: 1000, descriptionPrice: "À vista no PIX", image: "/assets/processador.jpg", quantityInStock: 10},
  { id: 10, name: "Notebook bom", price: 2500, descriptionPrice: "À vista no PIX", image: "/assets/laptop-1.jpg", quantityInStock: 10},
  { id: 11, name: "Notebook excelente", price: 4500, descriptionPrice: "À vista no PIX", image: "/assets/laptop-2.jpg", quantityInStock: 10},
  { id: 12, name: "Mouse barato", price: 20, descriptionPrice: "À vista no PIX", image: "/assets/mouse-1.png", quantityInStock: 10},
  { id: 13, name: "Mouse ótimo", price: 200, descriptionPrice: "À vista no PIX", image: "/assets/mouse-2.jpg", quantityInStock: 10},
  { id: 14, name: "Mouse pequeno", price: 50, descriptionPrice: "À vista no PIX", image: "/assets/mouse-4.jpg", quantityInStock: 10},
  { id: 15, name: "Teclado bom", price: 159.99, descriptionPrice: "À vista no PIX", image: "/assets/teclado-2.jpg", quantityInStock: 10},
]
