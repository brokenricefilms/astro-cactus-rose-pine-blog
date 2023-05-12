declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"post": {
"code-tinh-tam-chu-nghia-khac-ky.md": {
  id: "code-tinh-tam-chu-nghia-khac-ky.md",
  slug: "code-tinh-tam-chu-nghia-khac-ky",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"con-duong-tro-thanh-weeaboo-gia-cay.md": {
  id: "con-duong-tro-thanh-weeaboo-gia-cay.md",
  slug: "con-duong-tro-thanh-weeaboo-gia-cay",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"music-i-like.md": {
  id: "music-i-like.md",
  slug: "music-i-like",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"qua-khu-song-chui-ngui-tren-internet-va-cau-truyen-bao-mat.md": {
  id: "qua-khu-song-chui-ngui-tren-internet-va-cau-truyen-bao-mat.md",
  slug: "qua-khu-song-chui-ngui-tren-internet-va-cau-truyen-bao-mat",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"tai-sao-light-theme-moi-la-chan-ai.md": {
  id: "tai-sao-light-theme-moi-la-chan-ai.md",
  slug: "tai-sao-light-theme-moi-la-chan-ai",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"trai-nghiem-open-source-sau-2-nam-1-thang-20-ngay.md": {
  id: "trai-nghiem-open-source-sau-2-nam-1-thang-20-ngay.md",
  slug: "trai-nghiem-open-source-sau-2-nam-1-thang-20-ngay",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"tro-thanh-con-nghien-code-lanh-manh.md": {
  id: "tro-thanh-con-nghien-code-lanh-manh.md",
  slug: "tro-thanh-con-nghien-code-lanh-manh",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"why-i-dont-wear-underwear.md": {
  id: "why-i-dont-wear-underwear.md",
  slug: "why-i-dont-wear-underwear",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
