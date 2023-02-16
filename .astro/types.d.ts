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
"Vim-life.md": {
  id: "Vim-life.md",
  slug: "vim-life",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"chang-hanh-trinh-den-voi-lap-trinh-va-lam-the-meo-nao-de-hoc-no.md": {
  id: "chang-hanh-trinh-den-voi-lap-trinh-va-lam-the-meo-nao-de-hoc-no.md",
  slug: "chang-hanh-trinh-den-voi-lap-trinh-va-lam-the-meo-nao-de-hoc-no",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
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
"css-unit.md": {
  id: "css-unit.md",
  slug: "css-unit",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"daily-journal-feb-3-2023.md": {
  id: "daily-journal-feb-3-2023.md",
  slug: "daily-journal-feb-3-2023",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"daily-journal-feb-4-2023.md": {
  id: "daily-journal-feb-4-2023.md",
  slug: "daily-journal-feb-4-2023",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"daily-journal-feb-5-2023.md": {
  id: "daily-journal-feb-5-2023.md",
  slug: "daily-journal-feb-5-2023",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"daily-journal-feb-7-2023.md": {
  id: "daily-journal-feb-7-2023.md",
  slug: "daily-journal-feb-7-2023",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"daily-journal-feb-8-2023.md": {
  id: "daily-journal-feb-8-2023.md",
  slug: "daily-journal-feb-8-2023",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"daily-journal-feb-9-2023.md": {
  id: "daily-journal-feb-9-2023.md",
  slug: "daily-journal-feb-9-2023",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"github-co-gi-vui.md": {
  id: "github-co-gi-vui.md",
  slug: "github-co-gi-vui",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"go-ky-toan-hoc-bang-chuc-nang-go-tat.md": {
  id: "go-ky-toan-hoc-bang-chuc-nang-go-tat.md",
  slug: "go-ky-toan-hoc-bang-chuc-nang-go-tat",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"goc-chia-se-setup-sai-hang-ngay.md": {
  id: "goc-chia-se-setup-sai-hang-ngay.md",
  slug: "goc-chia-se-setup-sai-hang-ngay",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"khi-toi-chet.md": {
  id: "khi-toi-chet.md",
  slug: "khi-toi-chet",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"lam-github-profile-nhin-dieu-da-hon.md": {
  id: "lam-github-profile-nhin-dieu-da-hon.md",
  slug: "lam-github-profile-nhin-dieu-da-hon",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"lam-sao-lap-trinh-mot-blog-chem-gio.md": {
  id: "lam-sao-lap-trinh-mot-blog-chem-gio.md",
  slug: "lam-sao-lap-trinh-mot-blog-chem-gio",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"lap-trinh-tren-dien-thoai-the-meo-nao.md": {
  id: "lap-trinh-tren-dien-thoai-the-meo-nao.md",
  slug: "lap-trinh-tren-dien-thoai-the-meo-nao",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"linux-co-gi-vui.md": {
  id: "linux-co-gi-vui.md",
  slug: "linux-co-gi-vui",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"mem-ai-mot-cai-note-app-ma-minh-muon-tra-phi.md": {
  id: "mem-ai-mot-cai-note-app-ma-minh-muon-tra-phi.md",
  slug: "mem-ai-mot-cai-note-app-ma-minh-muon-tra-phi",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"my-note-taking-setup.md": {
  id: "my-note-taking-setup.md",
  slug: "my-note-taking-setup",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"open-source-la-cai-meo-gi-co-gi-vui-trai-nghiep-cua-mot-con-nghien-code-cui-bap.md": {
  id: "open-source-la-cai-meo-gi-co-gi-vui-trai-nghiep-cua-mot-con-nghien-code-cui-bap.md",
  slug: "open-source-la-cai-meo-gi-co-gi-vui-trai-nghiep-cua-mot-con-nghien-code-cui-bap",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"projects.md": {
  id: "projects.md",
  slug: "projects",
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
"setup-luot-web-tinh-tam-trong-internet-nhieu-shit.md": {
  id: "setup-luot-web-tinh-tam-trong-internet-nhieu-shit.md",
  slug: "setup-luot-web-tinh-tam-trong-internet-nhieu-shit",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"so-huu.md": {
  id: "so-huu.md",
  slug: "so-huu",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"stuDarkTheme-released-v0.1-beta.md": {
  id: "stuDarkTheme-released-v0.1-beta.md",
  slug: "studarktheme-released-v01-beta",
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
"thu-thuat-hack-tien-khi-dang-hoc-uni.md": {
  id: "thu-thuat-hack-tien-khi-dang-hoc-uni.md",
  slug: "thu-thuat-hack-tien-khi-dang-hoc-uni",
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
"uncopyright.md": {
  id: "uncopyright.md",
  slug: "uncopyright",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"vimium-buoc-toi-ky-nguyen-khai-tu-chuot.md": {
  id: "vimium-buoc-toi-ky-nguyen-khai-tu-chuot.md",
  slug: "vimium-buoc-toi-ky-nguyen-khai-tu-chuot",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"what-i-use.md": {
  id: "what-i-use.md",
  slug: "what-i-use",
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
