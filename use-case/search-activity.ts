interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

type ActivitySearch = Partial<Pick<Activity, "name" | "description">>;

type ActivityResult = Pick<
  Activity,
  "name" | "description" | "image" | "location" | "price" | "tags"
>;

interface ActivitySearchUseCase {
  search(search: ActivitySearch): Promise<ActivityResult[]>;
}
