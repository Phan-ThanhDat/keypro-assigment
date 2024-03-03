import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  IconButton,
  Input,
  ObjectCard,
  Select,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@components";
import { Down, MoreDot } from "@components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSavePoint, useToast, useUpdatePoint } from "@hooks";
import { PointMarker } from "@models";
import { useBoardStore } from "@stores/board";

export interface PointFormProps {
  onClose: () => void;
  point?: PointMarker;
}

const preprocessNumber = (value: any) => {
  return typeof value === "string" ? Number(value) : value;
};

const schema = z.object({
  category: z
    .string({
      required_error: "Category is required",
    })
    .min(1, {
      message: "Category is required",
    }),
  labelSize: z
    .string({
      required_error: "Label size is required",
    })
    .min(1, {
      message: "Label size is required",
    }),
  installYear: z.preprocess(
    preprocessNumber,
    z.number({
      required_error: "Install year is required",
    }),
  ),
  usageState: z
    .string({
      required_error: "Usage state is required",
    })
    .min(1, {
      message: "Usage state is required",
    }),
  owner: z
    .string({
      required_error: "Owner is required",
    })
    .min(1, {
      message: "Owner is required",
    }),
});

type SchemaType = z.infer<typeof schema>;

export function PointForm(props: PointFormProps) {
  const { onClose, point } = props;

  const { marker } = useBoardStore((state) => {
    return {
      marker: state.currentMarker,
    };
  });

  const {
    handleSubmit,
    trigger,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      category: point ? point.category : "",
      labelSize: point ? point.labelSize : "medium",
      installYear: point ? point.installYear : 2023,
      usageState: point ? point.usageState : "1",
      owner: point ? point.owner : "1",
    },
  });

  const { toast } = useToast();
  const savePoint = useSavePoint();
  const updatePoint = useUpdatePoint();

  async function create(data: SchemaType) {
    try {
      if (!marker) return;
      await savePoint.mutateAsync({
        lat: marker.lat,
        lng: marker.lng,
        category: data.category,
        labelSize: data.labelSize,
        installYear: data.installYear,
        usageState: data.usageState,
        owner: data.owner,
      });
      toast({
        title: "Point created",
        description: "Point has been created successfully",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Point creation failed",
        description: "Point creation failed",
        variant: "destructive",
      });
    }
  }

  async function update(data: SchemaType) {
    try {
      if (!point) return;
      await updatePoint.mutateAsync({
        id: point.id,
        data: {
          category: data.category,
          labelSize: data.labelSize,
          installYear: data.installYear,
          usageState: data.usageState,
          owner: data.owner,
        },
      });
      toast({
        title: "Point updated",
        description: "Point has been updated successfully",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Point update failed",
        description: "Point update failed",
        variant: "destructive",
      });
    }
  }

  async function onSubmit(data: SchemaType) {
    if (point) {
      await update(data);
    } else {
      await create(data);
    }
  }

  const disabled = isSubmitting || savePoint.isPending || updatePoint.isPending;

  function handleChangeValue(name: keyof SchemaType) {
    return (value: any) => {
      setValue(name, value);
      trigger(name);
    };
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ObjectCard
        onClose={isSubmitting ? undefined : onClose}
        renderHeader={
          <>
            <div className="flex items-center w-full">
              <Controller
                name="category"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      disabled={disabled}
                      id="select-category"
                      className="w-full"
                      value={field.value}
                      onValueChange={handleChangeValue("category")}
                      renderTrigger={
                        <SelectValue placeholder="Select category" />
                      }
                      error={errors.category?.message}
                    >
                      <SelectGroup>
                        <SelectItem value="1">Category 1</SelectItem>
                        <SelectItem value="2">Category 2</SelectItem>
                        <SelectItem value="3">Category 3</SelectItem>
                        <SelectItem value="4">Category 4</SelectItem>
                      </SelectGroup>
                    </Select>
                  );
                }}
              />
              <IconButton className="ml-3">
                <MoreDot className="text-[24px]" />
              </IconButton>
            </div>
          </>
        }
      >
        <div className="border-b-[#EFF2F7] border-b pb-4 px-4">
          <label className="font-semibold" htmlFor="select-label-size">
            Label size
          </label>
          <div className="mt-2 flex items-center">
            <Controller
              name="labelSize"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    disabled={disabled}
                    className="w-full"
                    value={field.value}
                    onValueChange={handleChangeValue("labelSize")}
                    renderTrigger={<SelectValue />}
                    id="select-label-size"
                    error={errors.labelSize?.message}
                  >
                    <SelectGroup>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium (default)</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectGroup>
                  </Select>
                );
              }}
            />
            <button
              aria-label="Choose color"
              className="w-9 h-9 flex-shrink-0 rounded-xl bg-background flex items-center justify-center ml-2"
            >
              <div className="w-7 h-7 rounded-[10px] bg-[#F4451E]"></div>
            </button>
          </div>
        </div>
        <div className="px-4 pt-4">
          <p className="font-semibold">Settings</p>
          <div className="grid gap-3 grid-cols-2">
            <div>
              <label
                className="text-sm mb-2 inline-flex"
                htmlFor="input-identifier"
              >
                Identifier
              </label>
              <Input value="39-56789" readOnly disabled id="input-identifier" />
            </div>
            <div>
              <label
                className="text-sm mb-2 inline-flex"
                htmlFor="select-install-year"
              >
                Install year
              </label>
              <Controller
                name="installYear"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      disabled={disabled}
                      className="w-full"
                      value={field.value?.toString()}
                      onValueChange={handleChangeValue("installYear")}
                      renderTrigger={<SelectValue />}
                      error={errors.installYear?.message}
                      id="select-install-year"
                    >
                      <SelectGroup>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                      </SelectGroup>
                    </Select>
                  );
                }}
              />
            </div>
            <div>
              <label
                className="text-sm mb-2 inline-flex"
                htmlFor="select-usage-state"
              >
                Usage state
              </label>
              <Controller
                name="usageState"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      disabled={disabled}
                      value={field.value?.toString()}
                      onValueChange={handleChangeValue("usageState")}
                      className="w-full"
                      id="select-usage-state"
                      error={errors.usageState?.message}
                      renderTrigger={<SelectValue />}
                    >
                      <SelectGroup>
                        <SelectItem value="1">Planned</SelectItem>
                        <SelectItem value="2">UnPlanned</SelectItem>
                      </SelectGroup>
                    </Select>
                  );
                }}
              />
            </div>
            <div>
              <label
                className="text-sm mb-2 inline-flex"
                htmlFor="select-owner"
              >
                Owner
              </label>
              <Controller
                name="owner"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      disabled={disabled}
                      value={field.value?.toString()}
                      onValueChange={handleChangeValue("owner")}
                      renderTrigger={<SelectValue />}
                      error={errors.owner?.message}
                      className="w-full"
                      id="select-owner"
                    >
                      <SelectGroup>
                        <SelectItem value="1">Owner 1</SelectItem>
                        <SelectItem value="2">Owner 2</SelectItem>
                      </SelectGroup>
                    </Select>
                  );
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="text-[#007AFF] flex items-center">
                  <p>More settings</p>
                  <Down className="ml-auto text-[32px] inline-flex" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p>... to be added</p>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className="mt-4 flex items-center justify-end gap-2">
            <Button onClick={onClose} disabled={disabled}>
              Discard
            </Button>
            <Button
              intent="fill"
              colorStyle="primary"
              type="submit"
              disabled={disabled}
            >
              Save
            </Button>
          </div>
        </div>
      </ObjectCard>
    </form>
  );
}
