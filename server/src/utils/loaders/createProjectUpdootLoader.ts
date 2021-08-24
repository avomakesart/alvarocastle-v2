import DataLoader from 'dataloader';
import { ProjectUpdoot } from '../../entities';

export const createProjectUpdootLoader = () =>
  new DataLoader<{ projectId: number; userId: number }, ProjectUpdoot | null>(
    async (keys) => {
      const updoots = await ProjectUpdoot.findByIds(keys as any);
      const updootIdToUpdoot: Record<string, ProjectUpdoot> = {};

      updoots.forEach(
        (updoot) =>
          (updootIdToUpdoot[`${updoot.userId}|${updoot.projectId}`] = updoot)
      );
      return keys.map(
        (key) => updootIdToUpdoot[`${key.userId}|${key.projectId}`]
      );
    }
  );
