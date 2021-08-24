import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavBar, SearchInput } from '../../components';
import { useHover } from '../../hooks';
import { useProjectsQuery } from '../../generated/graphql';
import { withApollo } from '../../utils';
import { Footer } from '../../components/Footer/Footer';
import { SelectInput } from '../../components/SelectInput/SelectInput';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState<string[] | string>('all');
  const [search, setSearch] = useState<any>('');
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const { data } = useProjectsQuery({
    variables: {
      limit: 10,
      cursor: '',
    },
  });

  const projects = data?.projects.projects;

  const showCategories = projects
    ?.slice()
    .sort((a, b) => a.category.localeCompare(b.category))
    .map((data) => data.category)
    .filter(
      (arr, index, self) => index === self.findIndex((cat) => cat === arr)
    );

  const onSearchSubmit = async (term: string) => {
    let result = [];
    result = projects?.filter((data) => {
      return data.title.search(term) != -1;
    }) as any;

    setSearch(result);
  };

  console.log(search);
  

  return (
    <>
      <NavBar />
      <div className='max-w-full ml-12 mr-12 2xl:ml-24 mt-10 flex flex-col justify-between'>
        <div className='max-w-4xl'>
          <h3>
            A selection of some of our projects and clients, showcasing just a
            bit of what we do.
          </h3>
        </div>

        <div className='max-w-full flex -ml-2 flex-row-reverse mt-10 mb-0 items-center justify-between 2xl:hidden'>
            <SearchInput
              onSubmit={(e) => onSearchSubmit(e)}
              placeHolder='Type a search...'
            />

            <div className='flex 2xl:hidden'>
              {categories === 'all' ? (
                <SelectInput
                  data={showCategories}
                  handleChange={() => setCategories('all')}
                  name='all'
                  selectedValue={categories}
                  defaultValue='all'
                />
              ) : (
                showCategories?.map((category) => (
                  <SelectInput
                    data={showCategories}
                    handleChange={() => setCategories(category)}
                    name={category}
                    selectedValue={category}
                    defaultValue={category}
                    key={category}
                  />
                ))
              )}
            </div>
          </div>

        <div className='max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mt-20'>
          {categories === 'all'
            ? projects?.map((project: any) => (
                <article
                  className={`cursor-pointer ${
                    hoverId === project.id ? '-mb-9' : ''
                  }`}
                >
                  <div
                    className='w-full'
                    key={project.id}
                    onMouseEnter={() => setHoverId(project.id)}
                    onMouseLeave={() => setHoverId(null)}
                  >
                    <img
                      className='max-w-full w-full h-auto'
                      src={project.featuredImage}
                      alt={project.title}
                    />
                  </div>

                  {hoverId === project.id && (
                    <div className='flex justify-between items-center mt-3'>
                      <div className='text-base uppercase font-semibold text-gray-500'>
                        {project.title}
                      </div>
                      <div className='text-base text-right'>
                        {project.createdAt}
                      </div>
                    </div>
                  )}
                </article>
              ))
            : projects
                ?.filter(({ category }) => category === categories)
                .map(({ id, featuredImage, title, createdAt }) => (
                  <article
                    className={`cursor-pointer ${
                      hoverId === id ? '-mb-9' : ''
                    }`}
                  >
                    <div
                      className='w-full'
                      key={id}
                      onMouseEnter={() => setHoverId(id)}
                      onMouseLeave={() => setHoverId(null)}
                    >
                      <img
                        className='max-w-full w-full h-auto'
                        src={featuredImage}
                        alt={title}
                      />
                    </div>

                    {hoverId === id && (
                      <div className='flex justify-between items-center mt-3'>
                        <div className='text-base uppercase font-semibold text-gray-500'>
                          {title}
                        </div>
                        <div className='text-base text-right'>{createdAt}</div>
                      </div>
                    )}
                  </article>
                ))}
        </div>

        <div className='absolute 2xl:fixed top-28 2xl:right-0 hidden 2xl:flex items-center 2xl:flex-col 2xl:mr-16 ml-30'>
        <SearchInput
              onSubmit={(e) => onSearchSubmit(e)}
              placeHolder='Type a search...'
            />

          <div className='hidden 2xl:mt-8 2xl:ml-10 2xl:mr-0 mx-auto 2xl:flex 2xl:items-end 2xl:flex-col'>
            <span
              className={`mt-1 text-xs md:text-sm 2xl:text-xl mr-6 2xl:mr-0 cursor-pointer ${
                'all' === categories ? 'border-b-2 border-black' : ''
              }`}
              onClick={() => setCategories('all')}
            >
              All Projects
            </span>
            {showCategories?.map((category) => (
              <>
                <span
                  className={`mt-1 text-xs md:text-sm 2xl:text-xl mr-6 2xl:mr-0 cursor-pointer ${
                    category === categories ? 'border-b-2 border-black' : ''
                  }`}
                  onClick={() => setCategories(category)}
                  key={category}
                >
                  {category}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default withApollo({ ssr: false })(Projects);
